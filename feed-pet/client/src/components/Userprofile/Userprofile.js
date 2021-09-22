import React, { Component } from 'react'
 
import UserProfile from 'react-user-profile'
 
  class Perfilpessoa extends Component {
  render() {
    const photo = 'foto aqui'
    const userName = 'Animalium'
    const location = 'New York, USA'
 
    const comments = [
      {
        id: '1',
        photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
        userName: 'Mike Ross',
        content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
        createdAt: 1543858000000
      }
    ]
 
    return (
      <div style={{ margin: '0 auto', width: '100%' }}
      style={{
        fontWeight: "bold",
       
        
    }}
      >
        <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
      </div>
    )
  }
}
 
export default Perfilpessoa