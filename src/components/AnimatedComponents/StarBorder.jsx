import s from './StarBorder.module.css';

const StarBorder = ({ px, py, padding, as: Component = 'button', className = '', color = 'black', speed = '6s', children, ...rest }) => {
  return (
    <Component className={`${s.star_border_container} ${className}`} {...rest}>
      <div
        className={`${s.border_gradient_bottom}`}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}></div>
      <div
        className={`${s.border_gradient_top} `}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}></div>
      <div className={`${s.inner_content} glass1  shadow-s p-${padding || 0} px-${px || 0} py-${py || 0}`}>{children}</div>
    </Component>
  );
};

export default StarBorder;
