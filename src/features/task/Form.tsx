import { Group, Button, Textarea, Title, CopyButton, Radio, TextInput, Paper, Text } from '@mantine/core';
import { TaskFormProvider, useTaskForm } from '@/features/task/FormContext';
import { isNotEmpty } from '@mantine/form';
import { assistantPrompt } from '@/features/task/Util';
import { useEventListener } from '@mantine/hooks';
import { useState, Fragment } from 'react';

export const TaskForm = (props: { csrfToken: string}) => {
  const [output, setOutput] = useState('');
  const form = useTaskForm({
    initialValues: {
      loading: false,
      topic: '唐揚げにレモンをかけるべきか否か',
      winner: ''
    },
    validate: {
      topic: isNotEmpty('お題は必須項目です')
    },
  });

  const handleSubmit = async () => {
    const members: string[] = ['A', 'B'];
    const winner = members[Math.floor(Math.random() * members.length)];
    console.log(winner);
    setOutput('Aさん「');
    form.setValues({ winner: winner, loading: true });

    const systemPrompt = 'Simulate a competitive debate and please output only the dialogue during the process.';
    const response = await fetch('/api/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_message: systemPrompt,
        human_message: assistantPrompt(form.values),
        csrf_token: props.csrfToken,
      }),
    });
    const stream = response.body;
    const reader = stream?.getReader();
    const decoder = new TextDecoder('utf-8');
    try {
      while (true) {
        const { done, value }:any = await reader?.read();
        if (done) {
          break;
        }
        const decodedValue = decoder.decode(value, { stream: true });
        setOutput(prevOutput => prevOutput + decodedValue);
      }
    } catch (error) {
      console.error(error);
    } finally {
      form.setValues({loading: false });
      reader?.releaseLock();
    }
  };

  return (
    <TaskFormProvider form={form}>
      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <TextInput
          label='バトルしてほしいお題'
          withAsterisk
          {...form.getInputProps('topic')}
        ></TextInput>

        <Group position="center">
          <Button type="submit" loaderPosition="center" color="orange" loading={form.values.loading}>議論開始!</Button>
        </Group>

        { output !== '' && (
          <Textarea
            value={output}
            minRows={2}
            autosize
            size='xs'
            mt="sm"
          ></Textarea>
        )}


        { !form.values.loading && form.values.winner !== '' && (
          <Title order={2}>結果: <Text span c="red">{form.values.winner}さんの勝ち！</Text></Title>
        )}
      </form>
    </TaskFormProvider>
  );
};
// tech article
