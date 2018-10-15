import React from 'react';
import ReactDOM from 'react-dom';
import "./MergeContainer.css";

export default class MainApp extends React.Component {
  render(){
    return (<table width="100%" cellPadding="0" cellSpacing="0" className="merge-table">
      <tbody>
        <tr><td width="175"></td>
          <td width="42%" className="merge-grey-td-top-sel aligncent" id="nameContainer0">
            <div className="subj-cont">
              <div className="aligncent">
                <div id="masterRadio_0" className="radio-w-border" title="Master Record">
                  <input type="radio" id="masterrecord" name="masterrecord" data-secid="a9e3c3e19a665ec043a72994c26558c4" value="402000039236446" className="mt8" />
                  <label></label>
                </div>
              </div>
              <div className="subj-text aligncent" title="171757 chat 3"><b>171757 chat 3</b></div>
              <div className="merge-sel-all">
                <a className="SLAlink_merge" href="javascript:Merge.Util.onSelectLink('0')">Click to select all values</a>
              </div>
            </div>
          </td>

          <td width="42%" className="merge-grey-td-top aligncent" id="nameContainer1">
            <div className="subj-cont">
              <div className="aligncent">
                <div id="masterRadio_1" className="radio-w-border" title="Select as Master Record">
                  <input type="radio" id="masterrecord" name="masterrecord" data-secid="a9e3c3e19a665ec0507b6580bc4d798d" value="402000039284127" className="mt8" />
                  <label></label>
                </div>
              </div>
              <div className="subj-textaligncent" title="171765 Inbound call from saranraj"><b>171765 Inbound call from saranraj</b></div>
              <div className="merge-sel-all">
                <a className="SLAlink_merge" href="javascript:Merge.Util.onSelectLink('1')">Click to select all values</a>
              </div>
            </div>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td className="merge-label pt20">Time to Respond</td>
          <td className="rdobtn curNotAlw merge-grey-td-mid-sel pt20">
            <label className="vishidden"></label>
            <div className="labelValue w470">&nbsp;
              <i className="icon-lock-01 MrgTiLkIcn"></i>
            </div>
          </td>
          <td className="rdobtn curNotAlw merge-grey-td-mid pt20" title="The value on the master record is considered for Time to Respond">
            <input type="radio" disabled="disabled" id="property(radio1)" className="fleft" name="property(Time to Respond)" value="402000039284127" />
            <label className="vishidden"></label>
            <div className="labelValue w470">&nbsp;
              <i className="icon-lock-01 MrgTiLkIcn"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="merge-label">Email</td>
          <td className="rdobtn merge-grey-td-mid-sel">
            <input type="radio" id="property(radio2)" className="fleft" name="property(Email)" value="402000039236446" />
            <label></label>
            <div className="labelValue w470">muthupandiyan.s+portal@zohocorp.com</div>
          </td>
          <td className="rdobtn merge-grey-td-mid">
            <input type="radio" id="property(radio2)" className="fleft" name="property(Email)" value="402000039284127" />
            <label></label>
            <div className="labelValue w470">saranraj.kce@gmail.com</div>
          </td>
        </tr>
        <tr>
          <td className="merge-label">Due Date</td>
          <td className="rdobtn curNotAlw merge-grey-td-mid-sel" title="The value on the master record is considered for Due Date">
          <input type="radio" disabled="disabled" id="property(radio3)" className="fleft" name="property(Due Date)" value="402000039236446" />
            <label className="vishidden"></label>
            <div className="labelValue w470">&nbsp;
              <i className="icon-lock-01 MrgTiLkIcn"></i>
            </div>
          </td>
          <td className="rdobtn curNotAlw merge-grey-td-mid">
          <input type="radio" disabled="disabled" id="property(radio3)" className="fleft" name="property(Due Date)" value="402000039284127" />
            <label className="vishidden"></label>
            <div className="labelValue w470">&nbsp;
              <i className="icon-lock-01 MrgTiLkIcn"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>);
  }
}
