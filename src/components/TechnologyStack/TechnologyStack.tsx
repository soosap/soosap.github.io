import clsx from 'clsx'

export interface Props {
  className?: string
}

const TechnologyStack = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>TechnologyStack</span>
    </div>
  );
};

export default TechnologyStack;
