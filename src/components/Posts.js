import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts : []
    }
    async componentDidMount(){//servidor externo
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await respuesta.json();
        this.setState({posts: datos});
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                    return <p key={post.id}>
                        {post.title}
                    </p>
                })}
            </div>
        )
    }
}
