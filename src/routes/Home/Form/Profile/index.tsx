import { useEffect, useState } from 'react';
import './Profile.css';
import { ProfileDTO } from '../../../../models/profile';
import findUser from '../../../../services/userGit-service';
import { useNavigate, useParams } from 'react-router-dom';



export default function Profile() {

    const [profile, setProfile] = useState<ProfileDTO>([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        findUser(params.user).then((response) => {
            setProfile(response.data);
        })
        .catch(() => {
            navigate("/form/profile/nl");
        })

    }, [profile]);

    return(
        <div className='profile'>
            <div className='profile-img'>
                <img src={profile.avatar_url} alt="image-profile" />
            </div>
            <div className='profile-data'>
                <h3> Informações</h3>
                <ul>
                    <li>Perfil: {profile.url}</li>
                    <li>Seguidores: {profile.followers}</li>
                    <li>Localidade: {profile.location}</li>
                    <li>Nome: {profile.name}</li>
                </ul>
            </div>
        </div>

    );
}
