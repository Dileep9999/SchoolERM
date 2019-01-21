import React from 'react';
import { Input, TextField, MenuItem } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';

export default class Teacher extends React.Component{

        constructor(props){
            super(props)
           
        }
state={
    key:0
}

   

   
        form={
            Image : {
                label   :'Profile Name',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.Image.error=this.form.Image.required?e.target.value?false:true:false;
                    this.form.Image.value=e.target.files[0];
                    this.setState(this.state)

                } 
            },
            FirstName : {
                label   :'First Name',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.FirstName.error=this.form.FirstName.required?e.target.value?false:true:false;
                    this.form.FirstName.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            LastName : {
                label   :'Last Name',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.LastName.error=this.form.LastName.required?e.target.value?false:true:false;
                    this.form.LastName.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            DOB : {
                label   :'Date of Birth',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.DOB.error=this.form.DOB.required?e.target.value?false:true:false;
                    this.form.DOB.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            Gender : {
                label   :'Gender',
                error   :false,
                value   :'',
                required:true,
                options :[
                    {'label':'Female','value':'F'},
                    {'label':'Male','value':'M'},
                    {'label':'Other','value':'O'}
                ],
                helperText:'Field is Required',
                change  : e => {
                    this.form.Gender.error=this.form.Gender.required?e.target.value?false:true:false;
                    this.form.Gender.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            Phone : {
                label   :'Phone Number',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.Phone.error=this.form.Phone.required?e.target.value?false:true:false;
                    this.form.Phone.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            BloodGroup : {
                label   :'Blood Group',
                error   :false,
                value   :'',
                required:true,
                options :[
                {value:'A+',label:'A Positive'},
                {value:'A-',label:'A Negative'},
                {value:'B+',label:'B Positive'},
                {value:'B-',label:'B Negative'},
                {value:'AB+',label:'AB Positive'},
                {value:'AB-',label:'AB Negative'},
                {value:'O+',label:'O Positive'},
                {value:'O-',label:'O Negative'}
                ],
                helperText:'Field is Required',
                change  : e => {
                    this.form.BloodGroup.error=this.form.BloodGroup.required?e.target.value?false:true:false;
                    this.form.BloodGroup.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            FatherName : {
                label   :'Father Name',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.FatherName.error=this.form.FatherName.required?e.target.value?false:true:false;
                    this.form.FatherName.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            MotherName : {
                label   :'Mother Name',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.MotherName.error=this.form.MotherName.required?e.target.value?false:true:false;
                    this.form.MotherName.value=e.target.value;
                    this.setState(this.state)

                } 
            },
            Address : {
                label   :'Address',
                error   :false,
                value   :'',
                required:true,
                helperText:'Field is Required',
                change  : e => {
                    this.form.Address.error=this.form.Address.required?e.target.value?false:true:false;
                    this.form.Address.value=e.target.value;
                    this.setState(this.state)

                } 
            }
            
        }


        render(){
            
            
            return (
                <div>
                    <Row>
                        <Col lg={2} md={10} sm={10} xs={10}>
                        Image
                        </Col>


                        <Col lg={9} md={9}  sm={9} xs={9}>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>
                            <label>{"Name"}</label></Col>
                            <Col lg={4} sm={4} xs={4}>
                            <TextField 
                            variant="outlined"
                            fullWidth
                            required={this.form['FirstName'].required}
                            label={this.form['FirstName'].label}
                            value={this.form['FirstName'].value}
                            helperText={this.form['FirstName'].helperText}
                            error={this.form['FirstName'].error}
                            onChange={this.form['FirstName'].change} />
                            </Col>
                            <Col lg={4} sm={4} xs={4}>
                            <TextField 
                            variant="outlined"
                            fullWidth
                            label={this.form['LastName'].label}
                            value={this.form['LastName'].value}
                            helperText={this.form['LastName'].helperText}
                            error={this.form['LastName'].error}
                            onChange={this.form['LastName'].change} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['Phone'].label}</Col>
                            <Col lg={8} sm={10} xs={10}>
                            <TextField 
                            variant="outlined"
                            fullWidth
                            type="number"
                            label={this.form['Phone'].label}
                            value={this.form['Phone'].value}
                            helperText={this.form['Phone'].helperText}
                            error={this.form['Phone'].error}
                            onChange={this.form['Phone'].change} />
                            </Col>
                            
                        </Row>
                        <br></br>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['DOB'].label}</Col>
                            <Col lg={8} sm={10} xs={10}>
                            <TextField 
                            type="date"
                            helperText={this.form['DOB'].helperText}
                            error={this.form['DOB'].error}
                            fullWidth
                            variant="outlined"
                            value={this.form['DOB'].value}
                            onChange={this.form['DOB'].change} />
                            </Col>
                            
                        </Row>
                        <br></br>
                        
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['Gender'].label}</Col>
                            <Col lg={8} sm={10} xs={10}>
                            <TextField 
                            select
                            variant="outlined"
                            helperText={this.form['Gender'].helperText}
                            error={this.form['Gender'].error}
                            label={this.form['Gender'].label}
                            value={this.form['Gender'].value}
                            onChange={this.form['Gender'].change} >
                            {this.form['Gender'].options.map(gender=>{
                                return (
                                    <MenuItem key={gender['label']}
                                    value={gender['value']}>{gender['label']}
                                    </MenuItem>
                                )
                            })}
                        
                            </TextField>
                            </Col>
                            
                        </Row>
                        <br></br>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['BloodGroup'].label}</Col>
                            <Col lg={4} sm={10} xs={10}>
                            <TextField 
                            select
                            variant="outlined"
                            fullWidth
                            helperText={this.form['BloodGroup'].helperText}
                            error={this.form['BloodGroup'].error}
                            label={this.form['BloodGroup'].label}
                            value={this.form['BloodGroup'].value}
                            onChange={this.form['BloodGroup'].change} >
                             {this.form['BloodGroup'].options.map(option=>{
                                return (
                                    <MenuItem key={option['label']}
                                    value={option['value']}>{option['label']}
                                    </MenuItem>
                                )
                            })}
                            </TextField>
                            </Col>
                            
                        </Row>
                        <br></br>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['FatherName'].label}</Col>
                            <Col lg={4} sm={10} xs={10}>
                            <TextField 
                            variant="outlined"
                            fullWidth
                            helperText={this.form['FatherName'].helperText}
                            error={this.form['FatherName'].error}
                            label={this.form['FatherName'].label}
                            value={this.form['FatherName'].value}
                            onChange={this.form['FatherName'].change} />
                            </Col>
                            
                        </Row>
                        <br></br>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['MotherName'].label}</Col>
                            <Col lg={4} sm={10} xs={10}>
                            <TextField 
                            variant="outlined"
                            fullWidth
                            helperText={this.form['MotherName'].helperText}
                            error={this.form['MotherName'].error}
                            label={this.form['MotherName'].label}
                            value={this.form['MotherName'].value}
                            onChange={this.form['MotherName'].change} />
                            </Col>
                            
                        </Row>
                        <br></br>
                        <Row>
                            <Col lg={2} sm={10} xs={10} xl={2}>{this.form['Address'].label}</Col>
                            <Col lg={7} sm={10} xs={10}>
                            <TextField 
                            variant="outlined"
                            fullWidth
                            multiline
                            helperText={this.form['Address'].helperText}
                            error={this.form['Address'].error}
                            rows={5}
                            label={this.form['Address'].label}
                            value={this.form['Address'].value}
                            onChange={this.form['Address'].change} />
                            </Col>
                            
                        </Row>
                        <br></br>


                        
                        
                        </Col>

                    </Row>
                </div>
            )
        }
}
