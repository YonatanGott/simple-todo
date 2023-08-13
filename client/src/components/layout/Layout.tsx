//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, AppShell } from '@mantine/core';
import AppHeader from './AppHeader';

//Styling elements imports

//Typescript models & enums imports
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <AppShell
      header={<AppHeader />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colors.violet[1] },
      })}
      padding="md"
      className={classes.container}
    >
      {children}
    </AppShell>
  )
}

const useStyles = createStyles((theme) => ({
  container: {
  }
}));

export default Layout