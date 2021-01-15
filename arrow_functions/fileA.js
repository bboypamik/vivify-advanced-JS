
zdravo()


// asinhroni JS
getToken = async () => {
    try {
      const token = await messaging().getToken();


      const response1 = await sendRequest1()
      const response2 = await sendRequest2(response1)
      const response3 = await sendRequest3()
      const response4 = await sendRequest4()


      console.log("Evo ga token", token)
    } catch (error) {
      console.log('GTE', error);
    }
  };

  getToken = () => {
    const tokenPromise = messaging().getToken();
    tokenPromise.then( token => console.log("Evo ga token", token));
    tokenPromise.catch( error => console.log('GTE', error));
  }


  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
  }
  

  async function loadJson(url) {
    try{
        const response = await fetch(url);
        if (response.status == 200) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    } catch(error) {
        alert(error)
    }
  }
loadJson('no-such-user.json')


// drugi primer async await 

function getAPIData(url) {
    return contentData(url)
      .catch(e => {
        return somethingElse(url)
      })
      .then(v => {
        return someOtherThing(v)
      })
      .then(x => {
        return anotherOtherThing(v)
      })
    }

async function getAPIData(url) {
    try {
        const v = await contentData(url)
        const x = await someOtherThing(v) 
        return await anotherOtherThing(x)
    } 
    catch(e) {
        return somethingElse(url)
    }
}

getAPIData("Neki url")