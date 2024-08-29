import React, { Component, useState } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import { Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import InputMask from "react-input-mask";
import { SketchPicker, PhotoshopPicker, SwatchesPicker } from 'react-color';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import bsCustomFileInput from 'bs-custom-file-input';

export class FormElements extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      toggleSwitchDefault: false,
      toggleSwitchSecondary: false,
      toggleSwitchSuccess: false,
      toggleSwitchDark: false,
      toggleSwitchDefault2: true,
      toggleSwitchSecondary2: true,
      toggleSwitchSuccess2: true,
      toggleSwitchDark2: true
    };
  }

  componentDidMount() {
    bsCustomFileInput.init();
  }

  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Forms</span>
              <span>Form Elements</span>
            </div>
            <h2 className="az-content-title">Form Elements</h2>

            <div className="az-content-label mg-b-5">Form Input &amp; Textarea</div>
            <p className="mg-b-20">A basic form control input and textarea with disabled and readonly mode.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <Form.Control type="text" placeholder="Input box" />
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control type="text" placeholder="Input box (readonly)" readOnly />
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control type="text" placeholder="Input box (disabled)" disabled />
              </div>
            </div>

            <div className="row row-sm mg-t-20">
              <div className="col-lg">
                <Form.Control as="textarea" rows="3" placeholder="Textarea" />
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control as="textarea" rows="3" placeholder="Textarea (readonly)" readOnly />
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control as="textarea" rows="3" placeholder="Textarea (disabled)" disabled />
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Valid State Input</div>
            <p className="mg-b-20">A form control with success, warning, and error state.</p>

            <form className="needs-validation was-validated">
              <div className="row row-sm">
                <div className="col-lg-4">
                  <div className="form-group has-success mg-b-0">
                    <Form.Control type="text" placeholder="Input box (success state)" defaultValue="This is input" required />
                    <Form.Control as="textarea" rows="3" className="mg-t-20" placeholder="Textarea (success state)" defaultValue="This is textarea" required />
                  </div>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                  <div className="form-group has-danger mg-b-0">
                    <Form.Control type="text" placeholder="Input box (invalid state)" required />
                    <Form.Control as="textarea" rows="3" className="mg-t-20" placeholder="Textarea (invalid state)" required />
                  </div>
                </div>
              </div>
            </form>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Custom Checkboxes &amp; Radios</div>
            <p className="mg-b-20">Custom styled checkboxes and radios.</p>

            <div className="row">
              <div className="col-lg-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Checkbox Unchecked"
                  className="ckbox"
                />
              </div>
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check
                  type="checkbox"
                  id="checked-checkbox"
                  label="Checkbox checked"
                  className="ckbox"
                  defaultChecked
                />
              </div>
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check
                  type="checkbox"
                  id="disabled-checkbox"
                  label="Checkbox disabled"
                  className="ckbox"
                  disabled
                />
              </div>
            </div>

            <div className="row mg-t-10">
              <div className="col-lg-3">
                <Form.Check
                  type="radio"
                  id="default-radio"
                  label="Radio Unchecked"
                  className="rdiobox"
                />
              </div>
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check
                  type="radio"
                  id="checked-radio"
                  label="Radio checked"
                  className="rdiobox"
                  defaultChecked
                />
              </div>
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check
                  type="radio"
                  id="disabled-radio"
                  label="Radio disabled"
                  className="rdiobox"
                  disabled
                />
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">File Browser</div>
            <p className="mg-b-20">Custom styled file browser.</p>

            <div className="row row-sm">
              <div className="col-sm-7 col-md-6 col-lg-4">
                <div className="custom-file">
                  <Form.Control type="file" className="custom-file-input"/>
                  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Toggle Switches</div>
            <p className="mg-b-20">Custom made toggles with jQuery support.</p>

            <div className="az-toggle-group-demo">
              <div className={ this.state.toggleSwitchDefault ? 'az-toggle on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchDefault: !this.state.toggleSwitchDefault })}><span></span></div>
              <div className={ this.state.toggleSwitchSecondary ? 'az-toggle az-toggle-secondary on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchSecondary: !this.state.toggleSwitchSecondary })}><span></span></div>
              <div className={ this.state.toggleSwitchSuccess ? 'az-toggle az-toggle-success on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchSuccess: !this.state.toggleSwitchSuccess })}><span></span></div>
              <div className={ this.state.toggleSwitchDark ? 'az-toggle az-toggle-dark on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchDark: !this.state.toggleSwitchDark })}><span></span></div>
            </div>

            <div className="az-toggle-group-demo mg-t-10">
              <div className={ this.state.toggleSwitchDefault2 ? 'az-toggle on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchDefault2: !this.state.toggleSwitchDefault2 })}><span></span></div>
              <div className={ this.state.toggleSwitchSecondary2 ? 'az-toggle az-toggle-secondary on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchSecondary2: !this.state.toggleSwitchSecondary2 })}><span></span></div>
              <div className={ this.state.toggleSwitchSuccess2 ? 'az-toggle az-toggle-success on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchSuccess2: !this.state.toggleSwitchSuccess2 })}><span></span></div>
              <div className={ this.state.toggleSwitchDark2 ? 'az-toggle az-toggle-dark on' : "az-toggle"} onClick={() => this.setState({ toggleSwitchDark2: !this.state.toggleSwitchDark2 })}><span></span></div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Select2</div>
            <p className="mg-b-20">Custom select input.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <Select
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                />
              </div>
              <div className="col-lg mg-t-20 mg-lg-t-0">
                <Select
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                  isMulti
                />
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Datepicker</div>
            <p className="mg-b-20">Datepicker for selecting dates.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.setState({ startDate: date })}
                  className="form-control"
                />
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Color Picker</div>
            <p className="mg-b-20">Color pickers for choosing colors.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <SketchPicker
                  color={this.state.color}
                  onChangeComplete={(color) => this.setState({ color: color.hex })}
                />
              </div>
              <div className="col-lg mg-t-20 mg-lg-t-0">
                <PhotoshopPicker
                  color={this.state.color}
                  onChangeComplete={(color) => this.setState({ color: color.hex })}
                />
              </div>
              <div className="col-lg mg-t-20 mg-lg-t-0">
                <SwatchesPicker
                  color={this.state.color}
                  onChangeComplete={(color) => this.setState({ color: color.hex })}
                />
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Input Mask</div>
            <p className="mg-b-20">Input mask for phone numbers, dates, and more.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <InputMask mask="999-999-9999" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="col-lg mg-t-20 mg-lg-t-0">
                <InputMask mask="99/99/9999" className="form-control" placeholder="MM/DD/YYYY" />
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Range Slider</div>
            <p className="mg-b-20">Range slider for selecting numeric ranges.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <Nouislider
                  range={{ min: 0, max: 100 }}
                  start={[20, 80]}
                  connect
                  onChange={(values) => console.log(values)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormElements;
