import { RecoilRoot , atom, selector, useRecoilState, useRecoilValue } from "recoil"

//state list
const listAtom = atom({
    key:"listAtom1",
    default:[],
});

const lengthAtom = selector({
    key:"lengthAtom1",
    get:({get})=>{
        const i = get(listAtom);
        return i.length;
    },
});


//compoent
function Show(){
    const length = useRecoilValue(lengthAtom)
    return(
        <span>{length}</span>
    )
}

function InputText(){
    const [text, setText] = useRecoilState(listAtom);

    function changeText(e){
        setText(e.target.value);
    }

    return(
        <input type="text" onChange={changeText}/>
    )
}

function SyncRL(){
    
    return(
        <>
            <Show/>
            <br />
            <InputText/>
        </>
    )
}

//export
export default function RL(){
    return (
        <RecoilRoot>
            <SyncRL/>
        </RecoilRoot>
    )
}