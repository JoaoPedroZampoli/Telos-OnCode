'use client'

import LoginSidebarImage from "@/app/Login/Components/LoginSidebarImage"
import Button from "@/components/Button"
import Select from "@/components/Select"
import TextArea from "@/components/TextArea"
import TextInput from "@/components/TextInput"
import React from "react"
import { twMerge } from "tailwind-merge"

type ProblemCreateState = {
    title?: string,
    description?: string,
    uf?: string,
    city?: string,
    neighborhood?: string,
    imageURL?: string,
    pix?: string,
    votingPeriod?: string
}

export default function ProblemCreate(){
    const labelStyle = 'text-base text-black text-2xl'
    const defaultLabelClasses = 'block font-bold text-black text-2xl'
    const mergedLabelClasses = twMerge(labelStyle, defaultLabelClasses)

    const [state, setState] = React.useState<ProblemCreateState>({
        city: '',
        description: '',
        imageURL: '',
        neighborhood: '',
        pix: '',
        title: '',
        uf: '',
        votingPeriod: ''

    })

    const handleChangeState = (updatedValues: ProblemCreateState)=>{
        setState((previousState) => ({
            ...previousState,
            ...updatedValues
        }))
    }

    return(
        <main>
            <div className="flex h-screen-navbar">
                <LoginSidebarImage/>
                <div className="flex flex-1 justify-center pl-10 pr-10 pb-10 overflow-auto">
                    <div className="mt-20 max-w-[588px] w-[100%]">
                        <TextInput labelClassNames={labelStyle} label="Título da Ação" placeholder="Título da Ação" onChange={(event) => handleChangeState({ title: event.target.value})} value={state.title}/>
                        <TextArea labelClassName={labelStyle} rows={4} label="Descrição do Problema" className="resize-none" onChange={(event) => handleChangeState({ description: event.target.value})} value={state.description}/>
                        <div className="flex flex-col">
                            <label className={`${mergedLabelClasses}`}>Localização</label>
                            <div className="flex gap-2 max-w-[100%]">
                                <TextInput label="" placeholder="Estado - UF" onChange={(event) => handleChangeState({ uf: event.target.value})} value={state.uf}/>
                                <TextInput label="" placeholder="Cidade" onChange={(event) => handleChangeState({ city: event.target.value})} value={state.city}/>
                                <TextInput label="" placeholder="Bairro" onChange={(event) => handleChangeState({ neighborhood: event.target.value})} value={state.neighborhood}/>
                            </div>
                        </div>
                        <TextInput label="Carregue sua Imagem" labelClassNames={`${labelStyle} mb-2`} placeholder="Insira o link aqui" iconLeft="uil:image-upload" subDescription={<span className="block mb-2 text-sm font-[400]"> Coloque no campo abaixo o <strong>link</strong> para a sua imagem, ela será utilizada como capa da sua ação, a resolução mínima para não perder muita qualidade é de 800x400px. </span>} onChange={(event) => handleChangeState({ imageURL: event.target.value})} value={state.imageURL}/>
                        <TextInput label="Chave Pix" labelClassNames={`${labelStyle} mb-2`} placeholder="Insira a chave aqui" iconLeft="ic:baseline-pix" subDescription={<span className="block mb-2 text-sm font-[400]"> Insira a chave pix de quem ficará responsável por receber as doações e dar vida a solução encontrada, seja pessoa física ou jurídica. </span>} onChange={(event) => handleChangeState({ pix: event.target.value})} value={state.pix}/>
                        <Select label="Período de Votação" labelClassName={`${labelStyle} mb-0`} subDescription="Escolha por quanto tempo as pessoas vão poder votar em uma solução para o seu problema. O perído de arrecadação é de 70 dias ou até bater a meta." options={[{value: "3", text: "3 Dias"}, {value: "7", text: "7 Dias"}, {value: "15", text: "15 Dias"}, {value: "20", text: "20 Dias"}]} onChange={(event) => handleChangeState({ votingPeriod: event.target.value})} value={state.votingPeriod}/>
                        <div className="flex flex-col gap-10px pb-10">
                            <Button className="rounded-[10px] pt-[16px] pb-[16px]">Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}