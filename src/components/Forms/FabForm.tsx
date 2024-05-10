"use client"

import * as React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
interface IFormConfig {
  resolver?: any
}
interface IFabFormProps {
    children:React.ReactNode,
    onSubmit:SubmitHandler<FieldValues>
} 


const FabForm: React.FunctionComponent<IFabFormProps & IFormConfig> = ({children,onSubmit,resolver}) => {
    const methods = useForm();
    const formConfig:IFormConfig = {};
    if(resolver){
      formConfig["resolver"] = resolver;
    }

    const formSubmit:SubmitHandler<FieldValues> = (data) => {
      console.log(data)
      onSubmit(data);
    }
  return <>
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(formSubmit)}>
              {children}
    </form>
  </FormProvider>
  </>;
};

export default FabForm;
