type BadgeProps = {
    label: string;
    color?: string;
};

const Badge = ({ label, color = 'gray' }: BadgeProps) => {
    const colorClasses: Record<string, string> = {
        gray: 'bg-recipify-primary-500 text-white ring-gray-500/10',
        blue: 'bg-blue-50 text-blue-600 ring-blue-500/10',
        green: 'bg-green-50 text-green-600 ring-green-500/10',
    };

    // Get the appropriate class based on the selected color or use the default gray
    const badgeClass = colorClasses[color] || colorClasses.gray;

    return (
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badgeClass}`}>
            {label}
        </span>
    );
};

export default Badge;