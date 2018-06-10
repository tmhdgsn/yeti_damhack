import React, { Component } from 'react';
import Brands from './Brands';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 300,
    height: 80
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 400,
  },
  cardImg: {
    width: 360,
  },
});

class FileUpload extends Component {
  constructor (props) {
    super(props);
    this.state = {selectedFile: null};
    this.uploadHandler = this.uploadHandler.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);

  }
  fileChangedHandler = (event) => {
    // Assuming only image
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

     reader.onloadend = function (e) {
        this.setState({selectedFile: [reader.result]})
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files  }
  }

  uploadHandler = () => {
    console.log(this.state.selectedFile)
  }

  render() {
    return (
        <div className='Buttons'>
        <input ref="file" type="file" multiple accept="image/*" onChange={this.fileChangedHandler} id="contained-button-file" />
        <label htmlFor="contained-button-file">
          <Button onClick={this.uploadHandler} variant="contained" component="span" className={this.props.classes.button} >
            Upload a photo
          </Button>
        </label>
        {this.state.selectedFile && <div>
          <Card className={this.props.classes.card} >
          <CardContent>
            <img src={this.state.selectedFile}  className={this.props.classes.cardImg}/>
          </CardContent>
          </Card>
        </div>}
      </div>
    );
  }
}

export default  withStyles(styles)(FileUpload);
