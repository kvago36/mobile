import React, { PureComponent } from 'react'
import classnames from 'classnames'

import styles from './Image.module.css'

class Image extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      counter: 0,
      loading: true,
      loaded: false
    }

    // eslint-disable-next-line react/destructuring-assignment
    this.elementRef = this.props.customRef || React.createRef()
    this.timer = 0
  }

  componentDidMount() {
    const { src, lazy } = this.props

    if (lazy) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const { isIntersecting } = entry;

          if (isIntersecting) {
            this.elementRef.current.src = src;
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px 200px 0px',
        root: document.querySelector('.observer')
      });
      observer.observe(this.elementRef.current);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleError = () => {
    this.setState({ loading: false, error: true }, this.updateScr)
  }

  handleLoad = () => {
    this.setState({ loading: false, loaded: true })
    const { onLoad } = this.props
    if (typeof onLoad === 'function') onLoad()
  }

  updateScr = () => {
    const { src } = this.props
    const { counter } = this.state

    if (counter > 5) {
      return
    }

    this.setState(state => ({
      ...state,
      error: false,
      loading: true,
      counter: state.counter + 1
    }), () => {
      this.timer = setTimeout(() => {
        if (!this.elementRef.current) {
          return
        }

        this.elementRef.current.src = `${src}?${Date.now()}`
      }, 5000)
    })
  }

  render() {
    const { src, classError, classLoad, classLoaded, customWrapper, classImg, lazy } = this.props
    const { error, loading, loaded } = this.state

    const imgClass = classnames({
      [classImg]: !error,
      [styles.loading]: loading,
      [styles.imgError]: error,
      [classLoaded]: loaded,
    })

    const classWrapper = classnames(styles.wrapperDefault, {
      [classError]: error,
      [classLoad]: loading,
      [customWrapper]: customWrapper
    })

    return (
      <div className={classWrapper}>
        <img
          className={imgClass}
          onError={this.handleError}
          onLoad={this.handleLoad}
          ref={this.elementRef}
          src={lazy ? '' : src}
          alt=""
        />
      </div>
    )
  }
}

export default Image