export const apiWrapper = async (apiCall: () => Promise<any>) => {
  try {
    const response = await apiCall();//bckend call
    console.log(response.data)
    return response.data;//on success sndng bcknd data
  } catch (error) {
    console.log(error)
    throw error;//else err wt ever gt gt frm bckend
  }
};
