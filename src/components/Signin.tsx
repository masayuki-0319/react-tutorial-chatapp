import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { VFC, useState, useEffect } from 'react';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://github.com/masayuki-0319'
        target='_blank'
        rel='noopener'
      >
        masayuki-0319
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type Props = {
  setName: (args?: any) => any;
};

export const SignIn: VFC<Props> = ({ setName }) => {
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  console.log(string);

  useEffect(() => {
    const disabled = string === '' ? true : false;
    setDisabled(disabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [string]);

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='ニックネーム'
            name='name'
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setString(e.target.value)
            }
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={disabled}
            onClick={() => setName(string)}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
