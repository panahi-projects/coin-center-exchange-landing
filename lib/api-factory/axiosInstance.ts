import axios from "axios";

const axiosInstance = axios.create();

interface session {
  user: {
    accessToken: {
      token: string;
    };
  };
}
//the below function is used to mock the session data and for production it must be changed
const getSession = () =>
  new Promise<session>((resolve, reject) => {
    const sampleSession: session = {
      user: {
        accessToken: {
          token: "the token goes here...",
        },
      },
    };
    resolve(sampleSession);
  });

axiosInstance.interceptors.request.use(
  async function (config) {
    try {
      // Perform asynchronous operations here, such as fetching a token
      const session = await getSession();
      if (session?.user?.accessToken?.token) {
        const token = session.user.accessToken.token;

        // Set the token in the request header
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      // Handle errors if any
      return Promise.reject(error);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
