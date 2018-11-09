const initState = {
	posts: [
		{
			id: '1', 
			title: 'OpenWeather API', 
			body: 'Openweather is a small IT company, established in 2014 by a group of engineers and experts in Big Data, data processing, and satellite imagery processing. They do very simple and fast APIs to work with their vast database of weather data, satellite imagery and other environmental data. '
		},
	    {
	    	id: '2', 
	    	title: 'Author', 
	    	body: 'Victoria Rotaru is a third year student at Innopolis University. She currently takes course "JS for Enterprise Development", where she had a task to create a JS application using React library. As you can see the application that you use is her work. Here you can determine cuurent weather by city, also leave a feedback and read about application.'
	    }
	]
}

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter(post => {
			post.body = 'deleted'
			return action.id !== post.id
		});
		return{
			...state,
			posts: newPosts
		}
	}
	return state;
}

export default rootReducer;