import React, {ChangeEvent} from 'react'

type PropsType = {
    setNewTitle:(newTitle:string) => void
    newTitle:string
}

export  const Input = (props:PropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.setNewTitle(e.currentTarget.value)
    }

  return (
    <input value={props.newTitle} onChange={onChangeHandler} />
  )
}
