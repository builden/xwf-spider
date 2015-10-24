# 学位房数据采集

## 说明
* 目前只抓取了深圳地区的信息（罗湖区除外）
* 数据来源: 学豆网
* 罗湖区招生地段示意高清图
http://lhjjk.sz.edu.cn/wzgl/tabid/72/ctl/ArticleShow/mid/437/ArticleID/209/Default.aspx
*


## react ES6
```js
import React from 'react';
import {Button} from 'react-bootstrap';

class LoadingButton extends React.Component {
  // getDefaultProps
  static defaultProps = {
    bsSt: 'inner default props',
  }

  // replace componentWillMount
  constructor(props) {
    super(props);
    console.log(props);
  }

  // replace getInitialState
  state = {
    isLoading: false,
  }

  // must use arraw function, otherwise cann't call this.setState
  handleClick = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const isLoading = this.state.isLoading;
    console.log(this.props.bsStyle);  // outerProps
    console.log(this.props.bsSt); // inner default props
    return (
      <Button
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
        >
        {isLoading ? 'Loading...' : 'Loading state'}
      </Button>
    );
  }
}

export default LoadingButton;

<LoadingButton bsStyle="outerProps" />
```