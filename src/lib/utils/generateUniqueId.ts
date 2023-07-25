function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

export function generateUniqueId() {
    const timestamp = Date.now(); // Get the current timestamp in milliseconds
    const randomString = generateRandomString(6); // Generate a random string of length 6
    const uniqueId = `${timestamp}_${randomString}`; // Combine timestamp and random string
    return uniqueId;
  }