export default {
    root: {
        class: [
            // Shape
            'rounded-lg shadow-lg',

            // Size
            'min-w-[11rem]',
            'py-0',

            // Colors
            'bg-surface-0 dark:bg-surface-700',
            'border border-surface-200 dark:border-surface-700',

            //Font
            ' text-xs'
        ]
    },
    menu: {
        class: [
            // Spacings and Shape
            'list-none',
            'm-0',
            'p-2',
            'outline-none',
            'flex flex-col gap-2 '
        ]
    },
    menuitem: {
        class: [
            // Position
            'relative'
        ]
    },
    content: ({ context }) => ({
        class: [
            //Shape
            'rounded-md',

            //  Colors
            {
                'text-surface-500 dark:text-white/70': !context.focused && !context.active,
                'text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90': context.focused && !context.active,
                'text-primary-highlight-inverse bg-primary-highlight': (context.focused && context.active) || context.active || (!context.focused && context.active)
            },

            // Hover States
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.active,
                'hover:bg-primary-highlight-hover text-primary-highlight-inverse': context.active
            },

            // Transitions
            'transition-shadow',
            'duration-200'
        ]
    }),
    action: {
        class: [
            'relative',
            // Flexbox

            'flex',
            'items-center',

            // Spacing
            'py-1',
            'px-1',

            // Color
            'text-surface-700 dark:text-white/80',

            // Misc
            'no-underline',
            'overflow-hidden',
            'cursor-pointer',
            'select-none'
        ]
    },
    icon: {
        class: [
            // Spacing
            'mr-2',

            // Color
            'text-surface-600 dark:text-white/70'
        ]
    },
    label: {
        class: ['leading-none']
    },
    submenuicon: {
        class: [
            // Position
            'ml-auto'
        ]
    },
    submenu: {
        class: [
            // Size
            'w-auto',

            // Spacing
            'p-2',
            'm-0',
            'list-none',
            '!flex flex-col gap-2',

            // Shape
            'shadow-lg',
            'border border-neutral-200 rounded-lg',

            // Position
            'static sm:absolute',
            'z-10',

            // Color
            'bg-surface-0 dark:bg-surface-700'
        ]
    },
    separator: {
        class: 'border-t border-neutral-100 dark:border-surface-600 my-0'
    }
};
