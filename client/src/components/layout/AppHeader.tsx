//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Header, Group, Title } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
//Styling elements imports

//Typescript models & enums imports

const AppHeader: FunctionComponent = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} p="xs">
      <Group spacing="xs">
        <IconMenu2 size={36} color="black" />
        <Title color="violet.7" order={1}>Simple</Title>
      </Group>
    </Header>
  )
}

const useStyles = createStyles((theme) => ({
  container: {

  }
}));

export default AppHeader