import axios from 'axios'
const baseURL = "http://localhost:8000/"
const API = axios.create({ baseURL: baseURL})


export const login = (authData:{username:string,password:string}) => API.post('/auth/usersignin', authData)
  .then(response => {
    const { token } = response.data;
    // Include the token in the headers of subsequent requests
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return response;
  });

export const signup = (authData:{username:string,email:string,password:string}) => API.post('/auth/signup', authData);

export const loginInvestigator = (authData:{username:string,password:string}) => API.post('/auth/investigatorsignin', authData)
  .then(response => {
    const { token } = response.data;
    // Include the token in the headers of subsequent requests
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return response;
  });

export const suggestUsername=()=>API.get('/auth/suggest-username')
export const getAllUserReports =(userId:string)=>API.get(`user/getUserReports/${userId}`)
export const uploadReport = (userId:string,reportData:{title:string,location:string,description:String,image:any})=>API.post(`user/postUserReports/${userId}`,reportData)
export const getReportsbyStatus=(status:string)=>API.get(`user/reportstatus/${status}`)

export const updayeStatus = (reportID:string,data:{status:string})=>API.post(`user/updateReportStatus/${reportID}`,data)

export const oldfetchMessage = (userId:string,investigatorId:string,participants:string)=>API.get(`chat/${userId}/${investigatorId}/${participants}`)
export const fetchMessage = (userId:string,investigatorId:string)=>API.get(`chat/${userId}/${investigatorId}`)

export const checkMessage = (userId:string)=>API.get(`user/checkMessages/${userId}`)


export const getAllProducts= ()=>API.get(`products/`)
export const loginUser = (authData:{username:string,password:string})=>API.post('login/',authData)
export const signupUser = (authData:{username:string,password:string})=>API.post('signup/',authData)
export const reviewEmotion = (prodId:number)=>API.get(`products/${prodId}/review-emotion-score/`)
export const reviewSentimentScore = (prodId:number)=>API.get(`products/${prodId}/review-sentiment-score/`)
export const getProduct = (prodId:number)=>API.get(`products/${prodId}/`)