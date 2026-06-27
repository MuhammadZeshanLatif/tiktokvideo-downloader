import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faCheck,
  faCheckCircle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export function YesMark({ label }: { label?: string }) {
  return (
    <span className="status-icon status-icon-yes">
      <FontAwesomeIcon icon={faCheck} />
      {label ? <span className="ms-1">{label}</span> : null}
    </span>
  );
}

export function NoMark({ label }: { label?: string }) {
  return (
    <span className="status-icon status-icon-no">
      <FontAwesomeIcon icon={faXmark} />
      {label ? <span className="ms-1">{label}</span> : null}
    </span>
  );
}

export function CheckListItem({
  children,
  className = 'mb-2',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={`d-flex align-items-start gap-2 ${className}`}>
      <FontAwesomeIcon icon={faCheckCircle} className="text-success mt-1 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function StepFlow({ steps }: { steps: string[] }) {
  return (
    <div className="step-flow bg-light rounded-4 p-4">
      {steps.map((step, index) => (
        <div key={step} className="step-flow-block">
          <div className="step-flow-item">
            <span className="step-flow-number">{index + 1}</span>
            <span>{step}</span>
          </div>
          {index < steps.length - 1 ? (
            <div className="step-flow-arrow text-muted">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
