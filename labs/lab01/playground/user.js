const fs = require('fs');

const getUserData = () => {
    try {
        let data = fs.readFileSync('user.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return { firstname: '', lastname: '', languages: [] };
    }
};

const saveUserData = (userData) => {
    fs.writeFileSync('user.json', JSON.stringify(userData, null, 2), 'utf-8');
};

const addUser = (title, level) => {
    const userData = getUserData();
    userData.languages.push({ title, level });
    saveUserData(userData);
    console.log('Language added successfully.');
};

const removeUser = (title) => {
    let userData = getUserData();
    let index = userData.languages.findIndex(lang => lang.title === title);
    if (index !== -1) {
        userData.languages.splice(index, 1);
        saveUserData(userData);
        console.log('Language removed successfully.');
    } else {
        console.log('Language not found.');
    }
};

const listUsers = () => {
    let userData = getUserData();
    console.log('User Data:', userData);
};

const readUser = (title) => {
    let userData = getUserData();
    let language = userData.languages.find(lang => lang.title === title);
    if (language) {
        console.log('Language Details:', language);
    } else {
        console.log('Language not found.');
    }
};

module.exports = { addUser, removeUser, listUsers, readUser };
