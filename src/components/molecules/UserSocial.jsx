import React from 'react';




const UserSocial = ({ user }) => {

    const SearchUrlgitHub = () => {
        if (user.githubUrl) return user.githubUrl;
        return 'https://github.com/';
    };
    const SearchUrlfacebook = () => {
        if (user.facebookUrl) return user.facebookUrl;
        return 'https://www.facebook.com/';
    };
    const SearchUrltwitter = () => {
        if (user.twitterUrl) return user.twitterUrl;
        return 'https://twitter.com/?lang=es';
    };
    const SearchUrllinkedin = () => {
        if (user.linkedinUrl) return user.linkedinUrl;
        return 'https://www.linkedin.com/';
    };

    return (
        <div className="user_social_urls">
            <a href={SearchUrlgitHub()} target='_blank' rel='noreferrer'>
                <i className="bi bi-github"></i>
            </a>
            <a href={SearchUrlfacebook()} target='_blank' rel='noreferrer'>
                <i className="bi bi-facebook"></i>
            </a>
            <a href={SearchUrltwitter()} target='_blank' rel='noreferrer'>
                <i className="bi bi-twitter"></i>
            </a>
            <a href={SearchUrllinkedin()} target='_blank' rel='noreferrer'>
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
    );
};

export default UserSocial;
