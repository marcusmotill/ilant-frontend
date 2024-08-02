'use client';
import React from 'react';
import themes from '@/themes';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/theme';

const ThemeSwitcher: React.FC = () => {
    const { theme: currentTheme, changeTheme } = useTheme();

    return (
        <div>
            <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className='btn btn-ghost m-1'>
                    Theme <ChevronDownIcon className='size-4' />
                </div>
                <div
                    tabIndex={0}
                    className='menu dropdown-content z-50 max-h-[calc(100vh-10rem)] w-56 flex-row overflow-scroll rounded-box bg-base-200 p-2 shadow'
                >
                    <div className='grid w-full grid-cols-1 gap-3'>
                        {themes.map((theme) => (
                            <button
                                key={theme}
                                onClick={() => changeTheme(theme)}
                                className='text-start outline-offset-4 outline-base-content'
                                data-set-theme={theme}
                            >
                                <span
                                    className='block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content'
                                    data-theme={theme}
                                >
                                    <span className='grid grid-cols-5 grid-rows-3'>
                                        <span className='col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3'>
                                            {currentTheme === theme ? (
                                                <CheckIcon className='size-4' />
                                            ) : (
                                                <div className='size-4'></div>
                                            )}
                                            <span className='flex-grow text-sm'>
                                                {theme}
                                            </span>{' '}
                                            <span className='flex h-full shrink-0 flex-wrap gap-1'>
                                                <span className='w-2 rounded-badge bg-primary'></span>{' '}
                                                <span className='w-2 rounded-badge bg-secondary'></span>{' '}
                                                <span className='w-2 rounded-badge bg-accent'></span>{' '}
                                                <span className='w-2 rounded-badge bg-neutral'></span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
