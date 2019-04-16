import React, { Component, Fragment } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

class Home extends Component {
	constructor(props) {
		super(props);



		const editorSettigns = {
				holderId: 'editor',
				autofocus: true,
				tools: {
					// header can be changed on heading etc
				    header: Header,
				    list: List,
				},

				onReady() {
					console.log('I am ready. Sorry, but i\m async editor :( ');
				},
				onChange() {
					console.log('pss! something change in me!');
				}
			},
			editor = new EditorJS(editorSettigns);

		editor.isReady
			.then( () => {
				console.log('i am also a promise!');
			})
			.catch( (err) => {
				console.log(err);
			});

		this.state = {
			editor
		};
	}
	saveData = () => {
		const {editor} = this.state;

		editor.save()
			.then((outputData) => {
	            console.log('Article data: ', outputData)
			})
			.catch((error) => {
	            console.log('Saving failed: ', error)
			});
	};
	showTextEditor = () => (
		<Fragment>
			<div id="editor" style={{border: '1px dashed gray'}}></div>
			<button onClick={this.saveData}>Save editor</button>
		</Fragment>

	);

	render() {
		return (
			<div>
				<ul>
					{this.showTextEditor()}
				</ul>
				<p>Home page</p>
			</div>
		);
	}
}

//
// function mapStateToProps(state) {
//     return {
//     }
// }
//
// function matchDispatchToProps(dispatch) {
//         return bindActionCreators({
//         }, dispatch)
// }
//
// export default connect(mapStateToProps)(Home);


export default Home;
