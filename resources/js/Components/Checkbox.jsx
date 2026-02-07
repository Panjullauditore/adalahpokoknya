export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-purple-400/30 bg-purple-900/20 text-purple-500 shadow-sm focus:ring-2 focus:ring-purple-500/50 ' +
                className
            }
        />
    );
}

