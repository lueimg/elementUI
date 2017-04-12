
import React from 'react';
import {Row, Col, Button, FormField, FormInput, Pill} from 'elemental';
import OnEvent from 'react-onevent';
import './styles.min.css';

export default class TagsInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tagsInputValue: '',
      tags: []
    }
  }

	addTag = (tag) => {

		if (tag == '') return;

		tag = tag.trim();

		if(!(this.state.tags.indexOf(tag) > -1)) {
			let tags = this.state.tags.concat([tag]);
			this.updateTags(tags);
		}

		this.updateTagValue('');
	}

	updateTagValue = (value) => {
		if(value == ' ') {
			return;
		}
		this.setState({
			tagsInputValue: value
		})
	}

	removeTag = (removeTag) => {
		let tags = this.state.tags.filter((tag) => tag !== removeTag);
		this.updateTags(tags);
	}

	updateTags = (tags) => {
		this.setState({
			tags
		})
	}

	render () {
		const {tagsInputValue, tags} = this.state;
		return (
			<div>
			 <OnEvent space={(e) => this.addTag(e.target.value)}>
			  <FormInput 
          value={tagsInputValue}
          onChange={(e) => { this.updateTagValue(e.target.value); }}
          type="text"
          placeholder="Tags seperated by space"
        />
			 </OnEvent>
       <div>
        {tags && tags.map((tag, index) => <Pill key={index} label={tag} type="success-inverted" onClear={() => this.removeTag(tag)} />)}
       </div>
			</div>
		)
	}
}
