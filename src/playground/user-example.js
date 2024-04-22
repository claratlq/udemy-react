const user = {
     name: 'Clara',
     age: 18,
     location: 'Fat'
}

function getLocation(location) {
     if (location) {
         return <p>Location: {location}</p>;
     } else {
         return undefined
     }
}

const template2 = 
 <div>
     <h1>{user.name ? user.name : 'Anonymous'}</h1>
     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
     {getLocation(user.location)}
</div>