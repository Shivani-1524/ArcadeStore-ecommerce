import '../profilepage.css'

type PropsType = {
    value: string, inputType: string, labelTxt: string, inputFor: string
}

type ComponentProps= {
    props: PropsType
}

const ProfileForm = ({ props } : ComponentProps) => {
    const { value, inputType, labelTxt, inputFor } = props
    return (
        <div className='input-container'>
            <label htmlFor={inputFor}>{labelTxt}</label>
            <input id={inputFor} type={inputType} defaultValue={value} />
        </div>

    )
}

export default ProfileForm