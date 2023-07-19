import React from 'react'
import { render } from '@vtex/test-tools/react'

import HelloWorld from './HelloWorld'

describe('Testes para o componente HelloWorld', () => {
  it('se o componente renderiza corretamente', () => {
    // Renderiza o componente
    const { getByText } = render(<HelloWorld />)

    // Verifica se o texto está presente no componente renderizado
    const texto = getByText('Formulário de envio de review')

    expect(texto).toBeInTheDocument()
  })
})

test('HelloWorld component renders correctly', () => {
  const { getByText, getByPlaceholderText } = render(<HelloWorld />)

  // Check if title is rendered
  expect(getByText('Formulário de envio de review')).toBeInTheDocument()

  // Check if input fields are rendered
  expect(getByPlaceholderText('Produto Avaliado')).toBeInTheDocument()
  expect(getByPlaceholderText('Data da Avaliação')).toBeInTheDocument()
  expect(getByPlaceholderText('Usuário Avaliador')).toBeInTheDocument()
  expect(getByPlaceholderText('Nota da Avaliação')).toBeInTheDocument()
  expect(getByPlaceholderText('Comentários')).toBeInTheDocument()

  // Check if button is rendered
  expect(getByText('Enviar Review')).toBeInTheDocument()
})
