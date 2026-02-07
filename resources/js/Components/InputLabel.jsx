export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `mb-2 block text-sm font-semibold text-purple-200 ` +
                className
            }
        >
            <span className="flex items-center gap-2">
                ✨ {value ? value : children}
            </span>
        </label>
    );
}

