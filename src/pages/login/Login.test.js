import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './login'; 

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login', () => {
  test('renders login form and handles valid login', async () => {
    const navigate = jest.fn();
    const { useNavigate } = require('react-router-dom');
    useNavigate.mockReturnValue(navigate);

    const user = { email: 'usuario@email.com', password: 'senha123' };
    localStorage.setItem('user', JSON.stringify(user));

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'usuario@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'senha123' } });
    fireEvent.click(screen.getByText('Entrar'));

    await waitFor(() => expect(navigate).toHaveBeenCalledWith('/home'));
  });

  test('shows error for invalid credentials', async () => {
    const navigate = jest.fn();
    const { useNavigate } = require('react-router-dom');
    useNavigate.mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'usuario@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'senhaErrada' } });
    fireEvent.click(screen.getByText('Entrar'));

    await waitFor(() => expect(screen.getByText('Credenciais inválidas.')).toBeInTheDocument());
  });
});


// Esse teste verifica o formulário de login em duas partes:

// Login Válido: Simula o preenchimento dos campos de email e senha com dados corretos e clica no botão "Entrar".
//  O teste espera que, após o login, o usuário seja redirecionado para a página /home.

// Login Inválido: Simula as credenciais incorretas e clica em "Entrar". 
// Nesse caso, o teste espera que o erro "Credenciais inválidas." seja exibido na tela.
