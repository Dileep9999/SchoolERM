const authcheck=function(){
  let user;
  try {
     user=JSON.parse(localStorage.getItem('uinfo'));
  } catch (error) {
    return false
  }
  return user['Role']
  
}

export default authcheck;
