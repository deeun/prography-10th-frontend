import useFormContext from "../../hooks/useFormContext.tsx";
import {FormContextType} from "../../types/form.interface.tsx";
import {FormQuestionBlock} from "./forms.styles.tsx";
import FormQuestion from "./FormQuestion.tsx";

function Form2(props: { submitted: boolean }) {
    const {onChangeInput, data, dataError} = useFormContext() as FormContextType;

    return (
        <>
            <FormQuestionBlock>
                <FormQuestion name="name" label="성함을 입력해주세요"
                              disabled={props.submitted}
                              onChange={props.submitted ? undefined : onChangeInput}
                              value={data && data.name} />
            </FormQuestionBlock>
            <FormQuestionBlock>
                <FormQuestion name="email" label="이메일 주소를 입력해주세요" onChange={props.submitted ? undefined : onChangeInput}
                              value={data && data.email}
                              disabled={props.submitted}
                              placeholder="예시: prography@gmail.com"
                              isError={dataError.email.isError} errorMsg={dataError.email.message} />
            </FormQuestionBlock>
            <FormQuestionBlock>
                <FormQuestion name="phone" label="휴대폰 번호를 입력해주세요" onChange={props.submitted ? undefined : onChangeInput}
                              value={data && data.phone}
                              disabled={props.submitted}
                              placeholder="예시: 010-1234-5678"
                              isError={dataError.phone.isError} errorMsg={dataError.phone.message}/>
            </FormQuestionBlock>
        </>
    );
}

export default Form2;