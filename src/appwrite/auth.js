import { account, OAuthProvider } from "./config"; 

export const loginWithGoogle = async () => {
    try {
      await account.createOAuth2Session(
        'google', 'https://xannates.com/', 'https://xannates.com/fail'
      )
      return respponse;
    } catch (error) {
      console.error(error)
    }
  }

export const logoutUser = async () => {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async () => {
  try {
    return await account.get()
  } catch (error) {
    console.error(error)
  }
}