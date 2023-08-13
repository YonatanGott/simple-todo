//React elements and hooks imports
import { FunctionComponent } from 'react'
import { useForm, isNotEmpty } from '@mantine/form';

//Components imports
import { createStyles, Container } from '@mantine/core';
import { TextInput, Textarea, Group, Box, Button } from '@mantine/core';
import { Stack, Card, Text, Badge, ActionIcon } from '@mantine/core';
import { ITodoRequest } from 'types/Todo';
import { useCreateTodoMutation, useDeleteTodoByIdMutation, useGetTodosQuery } from '_api/todos/todos.api';
import { IconPlaylistAdd, IconTrash, IconPencil } from '@tabler/icons-react';

//Styling elements imports

//Typescript models & enums imports
const HomeView: FunctionComponent = () => {
  const { classes } = useStyles();

  const [createTodo, { isLoading }] = useCreateTodoMutation()
  const {
    data: todos,
    isLoading: loadingList,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()

  const [deleteTodo] = useDeleteTodoByIdMutation()
  const form = useForm<ITodoRequest>({
    initialValues: {
      title: '',
      content: '',
    },

    validate: {
      title: isNotEmpty('Must have title'),
    },
  });
  const handleSubmit = async (values: ITodoRequest) => {
    try {
      await createTodo(values).unwrap()
      form.reset();
    } catch (error) {
      console.error('Failed to save the todo', error)
    }
  }

  let content;
  if (loadingList) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = todos.map(todo => <Card key={todo.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{todo.title}</Text>
        <Group position="right" spacing="xs">
          <Badge color={todo.active ? "violet" : "gray"} variant="light" >
            {todo.active ? "Active" : "Done"}
          </Badge>
          <ActionIcon>
            <IconPencil color='violet' size="1rem" />
          </ActionIcon>
          <ActionIcon onClick={() => deleteTodo(todo.id)}>
            <IconTrash color='violet' size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
      <Text size="sm" color="dimmed">
        {todo.content}
      </Text>
    </Card>)
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return (
    <Container p="xs">
      <Box mx="auto" mb="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Title"
            placeholder="..."
            {...form.getInputProps('title')}
          />

          <Textarea
            label="Content"
            placeholder="..."
            autosize
            radius="md"
            {...form.getInputProps('content')}
          />

          <Group position="center" mt="md">
            <Button variant="outline" loading={isLoading} leftIcon={<IconPlaylistAdd size="1rem" />} type="submit">Add Todo</Button>
          </Group>
        </form>
      </Box>
      <Stack>
        {content}
      </Stack>
    </Container>
  )
}

const useStyles = createStyles((theme) => ({
}));

export default HomeView