/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable vtex/prefer-early-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useMutation } from 'react-apollo'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

import GETREVIEWS from './ratting.gql'

const CSS_HANDLES = ['title', 'form', 'input', 'button', 'span']

/* Outro tipo de tipagem
interface ReviewProps {
 name: string
 product: string
 date: string
 ratting: number
 comment: string
}
*/

const HelloWorld: StorefrontFunctionComponent = () => {
  const [isCompleted, setIsCompleted] = React.useState(false)

  // tirar mutation na hora de dar o yarn test
  const [createNewReview] = useMutation(GETREVIEWS)

  const handles = useCssHandles(CSS_HANDLES)
  const [name, setName] = React.useState('')
  const handleChangeName = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setName(event.target.value)
  }

  const [product, setProduct] = React.useState('')
  const handleChangeProduct = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setProduct(event.target.value)
  }

  const [ratting, setRatting] = React.useState('')
  const handleChangeRatting = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setRatting(event.target.value)
  }

  const [date, setDate] = React.useState('')
  const handleChangeDate = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDate(event.target.value)
  }

  const [comment, setComment] = React.useState('')
  const handleChangeComment = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setComment(event.target.value)
  }

  const review = {
    name,
    product,
    date,
    ratting,
    comment,
  }

  // tirar mutation na hora de dar o yarn test
  if (isCompleted) {
    createNewReview({
      variables: {
        dataEntity: 'rattingrebeca',
        account: 'estagioacct',
        schema: 'ratting_schema',
        document: {
          document: {
            review,
          },
        },
      },
    }).then((result: any) => console.log(result))

    console.log(review)
    setIsCompleted(false)
  }

  const productContextValue = useProduct()

  return (
    <>
      <h1 className={`${handles.title}`}>Formulário de envio de review</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="form-example"
        className={`${handles.form}`}
      >
        <p className={`${handles.title}`}>
          {productContextValue?.product?.productName}
        </p>
        <span className={`${handles.span}`}>Nome do Produto Avaliado:</span>
        <input
          value={product}
          onChange={handleChangeProduct}
          required
          className={`${handles.input}`}
          type="text"
          placeholder="Produto Avaliado"
        />
        <span className={`${handles.span}`}>Data da Avaliação:</span>
        <input
          type="date"
          value={date}
          onChange={handleChangeDate}
          required
          className={`${handles.input}`}
          placeholder="Data da Avaliação"
        />
        <span className={`${handles.span}`}>Nome do Usuário:</span>
        <input
          value={name}
          onChange={handleChangeName}
          required
          className={`${handles.input}`}
          type="text"
          placeholder="Usuário Avaliador"
        />
        <span className={`${handles.span}`}>Nota da Avaliação (0 a 10)</span>
        <input
          value={ratting}
          onChange={handleChangeRatting}
          required
          className={`${handles.input}`}
          type="number"
          placeholder="Nota da Avaliação"
          min={0}
          max={10}
        />
        <span className={`${handles.span}`}>Comentários Adicionais</span>
        <textarea
          value={comment}
          onChange={handleChangeComment}
          className={`${handles.input}`}
          placeholder="Comentários"
          name="Comentários"
        />

        <button
          onClick={() => setIsCompleted(true)}
          className={`${handles.button}`}
        >
          Enviar Review
        </button>
      </form>
    </>
  )
}

export default HelloWorld
