'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type FirstStepProps = {
    handleNextStep: () => void,
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void
}

const FirstStep = ({handleNextStep, state, handleChangeState}:FirstStepProps) => {
    return(
        <>
            <TextInput onChange={(event)=> handleChangeState({email: event.target.value})} label="E-mail" placeholder="E-mail" type="email" iconLeft="uil:envelope-alt" value={state.email}/>
            <TextInput onChange={(event)=> handleChangeState({password: event.target.value})} label="Senha" placeholder="Senha" type="password" iconLeft="uil:key-skeleton-alt" value={state.password}/>
            <TextInput onChange={(event)=> handleChangeState({confirmPassword: event.target.value})} label="Confirmar Senha" placeholder="Confirmar Senha" type="password" iconLeft="uil:key-skeleton-alt" value={state.confirmPassword}/>
            <div className="mt-[24px]">
                <Button onClick={handleNextStep} variant="primary" className="rounded-md w-[100%]">Próximo</Button>
            </div>
            </>
    )
}

export default FirstStep