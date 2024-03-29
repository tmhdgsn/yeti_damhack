import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import placeholder from '../images/imgplaceholder.jpg'
import Buttons from './Buttons';
import axios from 'axios';
import cheerio from 'cheerio';

const styles = theme => ({
  root: {
   flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    width: 300,
    height: 80
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 350,
  },
  cardImg: {
    width: 300,
  },
});

class FileUpload extends Component {
  constructor (props) {
    super(props);
    this.state = {img: null, selectedFile: null, data: null};
    this.uploadHandler = this.uploadHandler.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);

  }
  fileChangedHandler = (event) => {
    // Assuming only image
    this.setState({selectedFile: event.target.files[0]})

    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

     reader.onloadend = function (e) {
        this.setState({img: [reader.result]})
        console.log(reader.result);

      }.bind(this);

  }

  uploadHandler = () => {
    const formData = new FormData()
    formData.append('file', this.state.selectedFile, this.state.selectedFile.name)
    console.log(formData)
    axios.post('http://vps389544.ovh.net:5555', formData)
    .then(function (response) {
      this.setState({data: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="flex-grid centered">
        <div className="col">
        <input ref="file" type="file" multiple accept="image/*" onChange={this.fileChangedHandler} id="contained-button-file" />
        <label htmlFor="contained-button-file">
          <Button onClick={this.uploadHandler} variant="contained" component="span" className={this.props.classes.button} >
            Upload a photo
          </Button>
        </label>
        </div>

          <div className="col cardImage">
              <Card className={this.props.classes.card} >
              <CardContent>
                <img src={this.state.img == null?placeholder:this.state.img}  className={this.props.classes.cardImg}/>
              </CardContent>
              </Card>

            </div>
            <Buttons click={this.updateStage} text="Next"></Buttons>
          </div>



    );
  }
}

export default  withStyles(styles)(FileUpload);
