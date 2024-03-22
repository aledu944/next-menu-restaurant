import React from 'react'
import { LuPen, LuTrash2 } from 'react-icons/lu'

export const CategoryTable = () => {
    return (
        <section className='category-table'>
            <div className='category-table__header'>
                <p>Codigo</p>
                <p>Nombre</p>
                <p>Fecha de creacion</p>
                <p>Acciones</p>
            </div>

            <div className='category-table__body'>
                {
                    [1, 2, 3, 4, 5,6].map(category => (
                        <div className='category-table__row'>
                            <p>#123</p>
                            <p>Sopas</p>
                            <p>13 de septiembre 2023</p>
                            <div className='category-table__actions'>
                                <button>
                                    <LuPen/>
                                </button>

                                <button>
                                    <LuTrash2/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
