/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import {Switch, SwitchProps, cn} from '@nextui-org/react';
import {MoonIcon} from 'icons/MoonIcon';
import {SunIcon} from 'icons/SunIcon';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

interface Props extends SwitchProps {}

export function ThemeSwitcher(props: Props) {
  const [mounted, setMounted] = useState(false);
  const {setTheme} = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isDarkTheme, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        thumbIcon={({isSelected, className}) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        color={'secondary'}
        classNames={{
          wrapper: 'p-2 h-10 w-16 overflow-visible bg-secondary',
          thumb: cn(
            'w-6 h-6 border-2 shadow-lg',
            //selected
            'group-data-[pressed=true]:w-7',
            'group-data-[selected]:group-data-[pressed]:ml-4',
          ),
        }}
        isSelected={isDarkTheme}
        onValueChange={setIsDarkTheme}
        {...props}
      />
    </div>
  );
}
