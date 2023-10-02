import './Button.css';

type Props = {
    name: string
}

export default function Button({name}: Props) {
    return(
        <button className='button' type="submit">{name}</button>

    );
}