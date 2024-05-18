"use client"

import * as React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
interface IFormConfig {
  resolver?: any
  defaultValues?:Record<string, any>
}
interface IFabFormProps {
    children:React.ReactNode,
    onSubmit:SubmitHandler<FieldValues>
} 


const FabForm: React.FunctionComponent<IFabFormProps & IFormConfig> = ({ children, onSubmit, resolver, defaultValues }) => {
 
    const formConfig:IFormConfig = {};
    if(resolver){
      formConfig["resolver"] = resolver;
    }

    if(defaultValues){
      formConfig["defaultValues"] = defaultValues;
    }
   const methods = useForm(formConfig);

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
