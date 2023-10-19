'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type SecondStepProps = {
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void
}

const SecondStep = ({state, handleChangeState}: SecondStepProps) => {
    return(
    <>
        <TextInput onChange={(event)=> handleChangeState({fullName: event.target.value})} label="Nome Completo" placeholder="Nome Completo" type="text" iconLeft="uil:user" value={state.fullName}/>
        <TextInput onChange={(event)=> handleChangeState({dateOfBirth: event.target.value})} label="Data de Nascimento" placeholder="DD/MM/AAAA" type="date" iconLeft="uil:calendar-alt" value={state.dateOfBirth?.toString()}/>
        <TextInput onChange={(event)=> handleChangeState({cellphone: event.target.value})} label="Número de Celular" placeholder="(00) 9 9999-9999" type="text" iconLeft="uil:phone-alt" value={state.cellphone}/>
        <div className="mt-[24px]">
            <Button variant="primary" className="rounded-md w-[100%]">Próximo</Button>
        </div>
    </>
    )
}

export default SecondStep