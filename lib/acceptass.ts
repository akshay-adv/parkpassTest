const client = {post:""}
export const acceptPass =async()=>{
    try {
        const response = await client.post<any>(
          '/api/changeEmail',
          qs.stringify({
            emailId: data.emailId,
          }),
        );
    
        return response.data;
      } catch (e) {

      }
};

export const createGuest =async()=>{
    try {
        const response = await client.post<any>(
          '/api/changeEmail',
          qs.stringify({
            emailId: data.emailId,
          }),
        );
    
        return response.data;
      } catch (e) {

      }
};

export const deleteGuest =async()=>{
    try {
        const response = await client.post<any>(
          '/api/changeEmail',
          qs.stringify({
            emailId: data.emailId,
          }),
        );
    
        return response.data;
      } catch (e) {

      }
};

export const getAllGuest =async()=>{
    const response = await client.get<TMemberShip[]>('/api/memberPassList');

    return response.data;
};

export const getLocation =async()=>{
    const response = await client.get<TMemberShip[]>('/api/memberPassList');

    return response.data;
};

export const getPass =async()=>{
    const response = await client.get<TMemberShip[]>('/api/memberPassList');

    return response.data;
};



