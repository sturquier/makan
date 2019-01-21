import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { CREATE_RECIPE_MUTATION } from '../../graphql/mutations'

export default class CreateRecipe extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { title, description } = this.state

    return (
      <Fragment>
        <Typography variant='h4'>Create Recipe Form</Typography>
        <TextField
          id='title'
          label='title'
          value={title}
          onChange={this.handleTextChange('title')}
        />
        <TextField
          id='description'
          label='description'
          value={description}
          onChange={this.handleTextChange('description')}
        />
        <Mutation mutation={CREATE_RECIPE_MUTATION} variables={{ title, description }}>
          {createRecipeMutation =>
            <Button variant='outlined' color='primary' onClick={createRecipeMutation}>Submit</Button>
          }
        </Mutation>
      </Fragment>
    )
  }
}
